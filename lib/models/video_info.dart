class VideoInfo {
  final String id;
  final String img;
  final String name;
  final String detail;

  const VideoInfo({
    required this.id,
    required this.img,
    required this.name,
    required this.detail,
  });

  factory VideoInfo.fromeJson(Map<String, dynamic> json) {
    return VideoInfo(
      id: json['id'],
      img: json['img'],
      name: json['name'],
      detail: json['detail'],
    );
  }
}
