import 'package:animation_flutter/models/video_detail.dart' as video;
import 'package:animation_flutter/servers/helpers/types.dart';
import 'package:animation_flutter/servers/server.dart';
import 'package:animation_flutter/views/player/player.dart';
import 'package:animation_flutter/views/video_detail/components/episode.dart';
import 'package:flutter/material.dart';

enum VideoType { home, search }

class VideoDetailView extends StatefulWidget {
  const VideoDetailView(
      {super.key, required this.id, required this.name, required this.type});

  final String name;
  final String id;
  final VideoType type;

  @override
  State<VideoDetailView> createState() => _VideoDetailViewState();
}

class _VideoDetailViewState extends State<VideoDetailView>
    with TickerProviderStateMixin {
  late TabController _tabController;
  late Future<List<video.VideoDetail>> futureVideo;
  late video.VideoDetail curVideo;

  @override
  void initState() {
    super.initState();

    // fetch video details by video id.
    final request = FetchVideoRequest(widget.id, widget.type);
    futureVideo = fetchVideo(request);
  }

  void handleEpisodePressed(video.Episode episode) async {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => Player(
          url: episode.web,
          videoDetail: curVideo,
        ),
      ),
    );
  }

  List<String> episodeNameList(List<video.VideoDetail> videoDetail) {
    return List<String>.from(videoDetail.map((e) => e.name));
  }

  TabBar renderTabBar(List<video.VideoDetail> videoList) {
    // init curVideo
    curVideo = videoList[0];

    List<String> episodeList = episodeNameList(videoList);
    final List<Tab> tabs = episodeList.map(renderTab).toList();
    handleTabBarTap(int index) => {curVideo = videoList[index]};

    return TabBar(
      tabs: tabs,
      controller: _tabController,
      onTap: handleTabBarTap,
    );
  }

  TabBarView renderTabBarView(List<video.VideoDetail> videoList) {
    return TabBarView(
      controller: _tabController,
      children: videoList.map(renderEpisode).toList(),
    );
  }

  Tab renderTab(String episode) {
    return Tab(text: episode);
  }

  Episode renderEpisode(video.VideoDetail videoDetail) {
    return Episode(
      episodeList: videoDetail.list,
      handleEpisodePressed: handleEpisodePressed,
    );
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<video.VideoDetail>>(
      future: futureVideo,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          final length = snapshot.data!.length;
          _tabController = TabController(length: length, vsync: this);
        }

        return Scaffold(
          appBar: AppBar(
            title: Text(widget.name),
            bottom: snapshot.hasData ? renderTabBar(snapshot.data!) : null,
          ),
          body: snapshot.hasData
              ? renderTabBarView(snapshot.data!)
              : const Center(child: CircularProgressIndicator()),
        );
      },
    );
  }
}
