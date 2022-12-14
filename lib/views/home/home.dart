import 'package:animation_flutter/components/video_list/video_list.dart';
import 'package:animation_flutter/models/video_info.dart';
import 'package:animation_flutter/servers/helpers/types.dart';
import 'package:animation_flutter/servers/server.dart';
import 'package:animation_flutter/views/search/search.dart';
import 'package:animation_flutter/views/video_detail/video_detail.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  late Future<List<VideoInfo>> futureVideoInfoList;

  @override
  void initState() {
    super.initState();

    final request = FetchLatestVideoListRequest('acg', '0', 'japan');
    futureVideoInfoList = fetchLatestVideoList(request);
  }

  @override
  Widget build(BuildContext context) {
    void handleSearchPressed() {
      Navigator.of(context).push(MaterialPageRoute(
        builder: (context) => const Search(),
      ));
    }

    void handleVideoPressed(VideoInfo videoInfo) {
      Navigator.of(context).push(MaterialPageRoute(
        builder: (context) => VideoDetailView(
          id: videoInfo.id,
          name: videoInfo.name,
          type: VideoType.home,
        ),
      ));
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text('Home'),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 20),
            child: IconButton(
              onPressed: handleSearchPressed,
              icon: const Icon(Icons.search),
            ),
          ),
        ],
      ),
      body: Center(
        child: FutureBuilder<List<VideoInfo>>(
          future: futureVideoInfoList,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return VideoList(
                videoInfoList: snapshot.data!,
                onVideoPressed: handleVideoPressed,
              );
            } else if (snapshot.hasError) {
              return Text(snapshot.error.toString());
            } else {
              return const CircularProgressIndicator();
            }
          },
        ),
      ),
    );
  }
}
