import 'package:flutter/foundation.dart';
import 'package:flutter_socket_io/model/message.dart';

class HomeProvider extends ChangeNotifier {
  final List<Message> _messages = [];

  List<Message> get messages => _messages;

  addNewMessage(Message message) {
    print('\n\nMessage $message\n\n');
    _messages.add(message);
    notifyListeners();
  }
}
