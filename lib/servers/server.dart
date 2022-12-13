import 'dart:convert';

import 'package:animation_flutter/models/video_detail.dart';
import 'package:animation_flutter/models/video_info.dart';
import 'package:animation_flutter/servers/helpers/fetch.dart';
import 'package:animation_flutter/servers/helpers/types.dart';

Future<List<VideoInfo>> fetchLatestVideoList(
    FetchLatestVideoListRequest request) async {
  List<VideoInfo> formatter(String body) {
    return List<VideoInfo>.from(
      jsonDecode(body).map((json) => VideoInfo.fromeJson(json)),
    );
  }

  return Fetch<List<VideoInfo>>.get('/yhdm/new', request).response(formatter);
}

Future<List<VideoDetail>> fetchLatestVideo(
    FetchLatestVideoRequest request) async {
  List<VideoDetail> formatter(String body) {
    return List<VideoDetail>.from(jsonDecode(body)
        .map((detailJson) => VideoDetail.fromeJson(detailJson)));
  }

  return Fetch<List<VideoDetail>>.get('/yhdm/playList', request)
      .response(formatter);
}
