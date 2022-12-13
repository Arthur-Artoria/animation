import 'dart:io';

import 'package:http/http.dart' as http;

import 'types.dart';

class Fetch<R> {
  static const _host = 'www.xxmanmi.com';

  static Uri _uriFactory(String path, [FetchRequest? request]) {
    return Uri.http(_host, path, request?.toJson());
  }

  late Uri _uri;
  late Future<http.Response> _httpResponse;

  Fetch.get(String path, [FetchRequest? request]) {
    _uri = _uriFactory(path, request);
    _httpResponse = http.get(_uri);
  }

  Fetch.post(String path, [FetchRequest? request]) {
    _uri = _uriFactory(path, request);
    _httpResponse = http.post(_uri, body: request?.toJson());
  }

  Future<R> response(R Function(String body) formatter,
      [String error = 'Failed request']) async {
    final response = await _httpResponse;
    if (response.statusCode == 200) {
      return formatter(response.body);
    } else {
      throw HttpException(error);
    }
  }
}
