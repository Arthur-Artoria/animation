import 'package:flutter/material.dart';

class SearchInput extends StatefulWidget {
  const SearchInput({super.key, required this.handleSubmitted});

  final void Function(String value) handleSubmitted;

  @override
  State<SearchInput> createState() => _SearchInputState();
}

class _SearchInputState extends State<SearchInput> {
  late TextEditingController controller;

  @override
  void initState() {
    super.initState();
    controller = TextEditingController();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      onSubmitted: widget.handleSubmitted,
      textInputAction: TextInputAction.search,
      decoration: const InputDecoration(
        border: OutlineInputBorder(),
        labelText: 'Search',
      ),
    );
  }
}
