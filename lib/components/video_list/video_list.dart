import 'package:animation_flutter/models/video_info.dart';
import 'package:flutter/material.dart';

class VideoList extends StatefulWidget {
  const VideoList({super.key, required this.videoInfoList});

  final List<VideoInfo> videoInfoList;

  @override
  State<VideoList> createState() => _VideoListState();
}

class _VideoListState extends State<VideoList> {
  Widget _buildRow(VideoInfo videoInfo) {
    return ListTile(
      leading: Image.network(videoInfo.img, width: 60, height: 60),
      title: Text(videoInfo.name),
      subtitle: Text(videoInfo.detail),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      padding: const EdgeInsets.only(top: 16, bottom: 16),
      itemCount: widget.videoInfoList.length,
      itemBuilder: (context, index) => _buildRow(widget.videoInfoList[index]),
      separatorBuilder: (context, index) => const Divider(),
    );
  }
}
