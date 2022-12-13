import 'package:flutter/material.dart';

import 'package:animation_flutter/models/video_detail.dart' as video;

class Episode extends StatelessWidget {
  const Episode({
    super.key,
    required this.episodeList,
    required this.handleEpisodePressed,
  });

  final List<video.Episode> episodeList;
  final void Function(video.Episode episode) handleEpisodePressed;

  @override
  Widget build(BuildContext context) {
    return GridView.extent(
      maxCrossAxisExtent: 80,
      padding: const EdgeInsets.all(8),
      mainAxisSpacing: 8,
      crossAxisSpacing: 8,
      children: _buildGridTileList(),
    );
  }

  List<ElevatedButton> _buildGridTileList() {
    return episodeList
        .map((e) => ElevatedButton(
              child: Text(e.name),
              onPressed: () => handleEpisodePressed(e),
            ))
        .toList();
  }
}
