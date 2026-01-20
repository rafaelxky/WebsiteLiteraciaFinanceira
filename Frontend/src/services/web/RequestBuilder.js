export class RequestBuilder {
  constructor() {
    this.url = "";
    this.options = {
      headers: {}
    };
  }

  Url(url) {
    this.url = url;
    return this;
  }

  Post() {
    this.options.method = "POST";
    return this;
  }

  Get() {
    this.options.method = "GET";
    return this;
  }

  Put() {
    this.options.method = "PUT";
    return this;
  }

  Delete() {
    this.options.method = "DELETE";
    return this;
  }

  JsonContent() {
    this.options.headers["Content-Type"] = "application/json";
    return this;
  }

  Body(content) {
    this.options.body = JSON.stringify(content);
    return this;
  }

  Build() {
    return new Request(this.url, this.options);
  }
}
