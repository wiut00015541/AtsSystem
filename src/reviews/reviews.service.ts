import { Injectable } from '@nestjs/common';

type Review = {
  id: number;
  applicationId: number;
  author: string;
  rating: number;
  comment: string;
};

@Injectable()
export class ReviewsService {
  private reviews: Review[] = [];

  create(
    applicationId: number,
    author: string,
    rating: number,
    comment: string,
  ) {
    const review: Review = {
      id: this.reviews.length + 1,
      applicationId,
      author,
      rating,
      comment,
    };

    this.reviews.push(review);
    return review;
  }

  findByApplication(applicationId: number) {
    return this.reviews.filter(
      (review) => review.applicationId === applicationId,
    );
  }
}
