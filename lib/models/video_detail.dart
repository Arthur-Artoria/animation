class Episode {
  final String name;
  final String web;

  const Episode({required this.name, required this.web});

  factory Episode.fromeJson(Map<String, dynamic> json) {
    return Episode(name: json['name'], web: json['web']);
  }
}

class VideoDetail {
  final String name;
  final dynamic value;
  final List<Episode> list;

  const VideoDetail(
      {required this.name, required this.value, required this.list});

  factory VideoDetail.fromeJson(Map<String, dynamic> json) {
    List<dynamic> list =
        json.containsKey('list') ? json['list'] : json['playList'];

    return VideoDetail(
      name: json['name'],
      value: json.containsKey('value') ? json['value'] : null,
      list: list.map((e) => Episode.fromeJson(e)).toList(),
    );
  }
}
