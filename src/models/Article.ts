import * as t from "typed-assert";

export class Article {
  id = 0;
  title = "";
  url = "";
  imageUrl = "";
  description = "";
  publishedAt = "";

  constructor({ 
    id,
    title,
    url,
    imageUrl,
    description,
    publishedAt,
  }: { 
    id: number,
    title: string,
    url: string,
    imageUrl: string,
    description: string,
    publishedAt: string,
  }) {
    t.isNotVoid(title);
    t.isNotVoid(description);
    this.id = id;
    this.title = title;
    this.url = url;
    this.imageUrl = imageUrl;
    this.description = description;
    this.publishedAt = publishedAt;
  }

  // public title(): string { return this._title; }
  // public description(): string { return this._description; }
}