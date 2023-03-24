import 'package:flutter/material.dart';
import 'Pages/HomePage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ARF Project',
      theme: ThemeData(

        primarySwatch: Colors.purple,
      ),
      home: const HomePage(),
    );
  }
}
