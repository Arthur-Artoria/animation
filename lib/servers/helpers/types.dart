class FetchHomeContentRequest {
  final String type;
  final String year;
  final String area;

  FetchHomeContentRequest(this.type, this.year, this.area);
  Map<String, dynamic> toJson() => {
        'type': type,
        'year': year,
        'area': area,
      };
}
