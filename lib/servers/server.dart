import 'dart:convert';

import 'package:animation_flutter/models/video_detail.dart';
import 'package:animation_flutter/models/video_info.dart';
import 'package:animation_flutter/servers/helpers/fetch.dart';
import 'package:animation_flutter/servers/helpers/types.dart';
import 'package:animation_flutter/views/video_detail/video_detail.dart';

Future<List<VideoInfo>> fetchLatestVideoList(
    FetchLatestVideoListRequest request) async {
  List<VideoInfo> formatter(String body) {
    return List<VideoInfo>.from(
      jsonDecode(body).map((json) => VideoInfo.fromeJson(json)),
    );
  }

  return Fetch<List<VideoInfo>>.get('/yhdm/new', request).response(formatter);
}

Future<List<VideoDetail>> fetchVideo(FetchVideoRequest request) async {
  final formatter = request.type == VideoType.home
      ? _homeVideoFormatter
      : _searchVideoFormatter;

  final path =
      request.type == VideoType.home ? '/yhdm/playList' : '/videoData8';

  return Fetch<List<VideoDetail>>.get(path, request).response(formatter);
}

Future<List<VideoInfo>> searchVideoList(SearchVideoListRequest request) async {
  List<VideoInfo> formatter(String body) {
    return List<VideoInfo>.from(
      jsonDecode(body).map((json) => VideoInfo.fromeJson(json)),
    );
  }

  return Fetch<List<VideoInfo>>.get('/videoList8', request).response(formatter);
}

Future<String> fetchVideoUrl(FetchVideoUrlRequest request) async {
  String formatter(String body) {
    return body.replaceAll(RegExp(r'\\'), '');
  }

  return Fetch<String>.get('/playUrl8', request).response(formatter);
}

List<VideoDetail> _homeVideoFormatter(String body) {
  return List<VideoDetail>.from(
    jsonDecode(body).map((detailJson) => VideoDetail.fromeJson(detailJson)),
  );
}

List<VideoDetail> _searchVideoFormatter(String body) {
  return List<VideoDetail>.from(
    jsonDecode(body)['playList']
        .map((detailJson) => VideoDetail.fromeJson(detailJson)),
  );
}
