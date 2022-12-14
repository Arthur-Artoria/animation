class VideoInfo {
  final String id;
  final String? img;
  final String name;
  final String detail;

  const VideoInfo({
    required this.id,
    required this.img,
    required this.detail,
    required this.name,
  });

  factory VideoInfo.fromeJson(Map<String, dynamic> json) {
    return VideoInfo(
      id: json['id'],
      img: json.containsKey('img') ? json['img'] : null,
      name: json['name'],
      detail: json['detail'],
    );
  }
}
