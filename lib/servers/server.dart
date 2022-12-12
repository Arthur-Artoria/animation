import 'dart:convert';
import 'dart:io';

import 'package:animation_flutter/models/video_info.dart';
import 'package:animation_flutter/servers/helpers/types.dart';
import 'package:http/http.dart' as http;

const host = 'www.xxmanmi.com';

Uri url(String paths, [Map<String, dynamic>? queryParameters]) {
  return Uri.http(host, paths, queryParameters);
}

Future<List<VideoInfo>> fetchHomeContent(
    FetchHomeContentRequest request) async {
  final response = await http.get(url('/yhdm/new', request.toJson()));

  if (response.statusCode == 200) {
    return List<VideoInfo>.from(
        jsonDecode(response.body).map((json) => VideoInfo.fromeJson(json)));
  } else {
    throw const HttpException('Failed request');
  }
}
