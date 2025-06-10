export default class AppController {
  static getHomePage(request, response) {
    response.status(200).send('Hello ALX!');
  }
}
