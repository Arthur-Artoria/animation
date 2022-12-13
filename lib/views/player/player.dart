import 'package:animation_flutter/models/video_detail.dart';
import 'package:chewie/chewie.dart';
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class Player extends StatefulWidget {
  const Player({super.key, required this.url, required this.videoDetail});

  final String url;
  final VideoDetail videoDetail;

  @override
  State<Player> createState() => _PlayerState();
}

class _PlayerState extends State<Player> {
  late VideoPlayerController videoPlayerController;
  late Future<void> futureInitialize;
  ChewieController? chewieController;
  bool isError = false;

  @override
  void initState() {
    super.initState();

    initPlayer();
  }

  @override
  void dispose() {
    videoPlayerController.dispose();
    chewieController?.dispose();

    super.dispose();
  }

  Future<void> initPlayer() async {
    videoPlayerController = VideoPlayerController.network(widget.url);
    try {
      await videoPlayerController.initialize();
      chewieController = ChewieController(
        videoPlayerController: videoPlayerController,
      );
      setState(() {});
    } catch (e) {
      setState(() {
        isError = true;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final width = size.width;
    final height = width * 9 / 16 + 25;
    late Widget content;

    if (isError) {
      content =
          const Text('Video failed to load, please select another source.');
    } else if (chewieController == null) {
      content = Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: const [
          CircularProgressIndicator(),
          SizedBox(height: 20),
          Text('Loading')
        ],
      );
    } else {
      content = SizedBox(
        height: height,
        child: Chewie(controller: chewieController!),
      );
    }

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.videoDetail.name),
      ),
      body: Center(
        child: content,
      ),
    );
  }
}
