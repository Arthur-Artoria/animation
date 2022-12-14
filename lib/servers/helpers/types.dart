import 'package:animation_flutter/views/video_detail/video_detail.dart';

abstract class FetchRequest {
  Map<String, dynamic> toJson();
}

class FetchLatestVideoListRequest implements FetchRequest {
  final String type;
  final String year;
  final String area;

  FetchLatestVideoListRequest(this.type, this.year, this.area);

  @override
  Map<String, dynamic> toJson() => {
        'type': type,
        'year': year,
        'area': area,
      };
}

class FetchVideoRequest implements FetchRequest {
  final String id;
  final VideoType type;

  FetchVideoRequest(this.id, this.type);

  @override
  Map<String, dynamic> toJson() => {
        'id': id,
      };
}

class SearchVideoListRequest implements FetchRequest {
  final String word;

  const SearchVideoListRequest(this.word);

  @override
  Map<String, dynamic> toJson() => {
        'word': word,
      };
}

class FetchVideoUrlRequest implements FetchRequest {
  final String id;

  const FetchVideoUrlRequest(this.id);

  @override
  Map<String, dynamic> toJson() => {
        'id': id,
      };
}
