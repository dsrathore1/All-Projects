// ignore_for_file: file_names

import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Automating Response Force"),
        centerTitle: true,
      ),
      body: const Center(
        child: Text("Hello World"),
      ),
    );
  }
}
