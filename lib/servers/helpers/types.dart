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

class FetchLatestVideoRequest implements FetchRequest {
  final String id;

  FetchLatestVideoRequest(this.id);

  @override
  Map<String, dynamic> toJson() => {
        'id': id,
      };
}
