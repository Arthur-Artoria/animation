import 'package:animation_flutter/components/video_list/video_list.dart';
import 'package:animation_flutter/models/video_info.dart';
import 'package:animation_flutter/servers/helpers/types.dart';
import 'package:animation_flutter/servers/server.dart';
import 'package:animation_flutter/views/search/search.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  late Future<List<VideoInfo>> futureVideoInfoList;

  @override
  void initState() {
    super.initState();

    final request = FetchHomeContentRequest('acg', '0', 'japan');
    futureVideoInfoList = fetchHomeContent(request);
  }

  @override
  Widget build(BuildContext context) {
    void handleSearchPressed() {
      Navigator.of(context).push(MaterialPageRoute(
        builder: (context) => const Search(),
      ));
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text('Home'),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 20),
            child: IconButton(
              onPressed: handleSearchPressed,
              icon: const Icon(Icons.search),
            ),
          ),
        ],
      ),
      body: FutureBuilder<List<VideoInfo>>(
        future: futureVideoInfoList,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return VideoList(videoInfoList: snapshot.data!);
          } else if (snapshot.hasError) {
            return Text(snapshot.error.toString());
          } else {
            return const CircularProgressIndicator();
          }
        },
      ),
    );
  }
}
