import 'package:animation_flutter/components/video_list/video_list.dart';
import 'package:animation_flutter/models/video_info.dart';
import 'package:animation_flutter/servers/helpers/types.dart';
import 'package:animation_flutter/servers/server.dart';
import 'package:animation_flutter/views/search/components/search_input.dart';
import 'package:animation_flutter/views/video_detail/video_detail.dart';
import 'package:flutter/material.dart';

class Search extends StatefulWidget {
  const Search({super.key});

  @override
  State<Search> createState() => _SearchState();
}

class _SearchState extends State<Search> {
  bool isLoading = false;
  List<VideoInfo>? videoInfoList;
  Error? fetchVideoListError;

  void handleSubmitted(String value) async {
    setState(() {
      isLoading = true;
      fetchVideoListError = null;
    });

    final request = SearchVideoListRequest(value);
    try {
      final list = await searchVideoList(request);
      setState(() {
        videoInfoList = list;
      });
    } catch (e) {
      setState(() {
        fetchVideoListError = e as Error?;
      });
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  void handleVideoPressed(VideoInfo videoInfo) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => VideoDetailView(
          id: videoInfo.id,
          name: videoInfo.name,
          type: VideoType.search,
        ),
      ),
    );
  }

  Widget renderContent() {
    if (isLoading) {
      return const Center(child: CircularProgressIndicator());
    } else if (fetchVideoListError != null) {
      return Center(child: Text(fetchVideoListError.toString()));
    } else if (videoInfoList != null) {
      return VideoList(
        videoInfoList: videoInfoList!,
        onVideoPressed: handleVideoPressed,
      );
    } else {
      return Container();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Search'),
      ),
      body: Container(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            SearchInput(handleSubmitted: handleSubmitted),
            Expanded(child: renderContent()),
          ],
        ),
      ),
    );
  }
}
