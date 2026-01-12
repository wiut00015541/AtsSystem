import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('applications/:applicationId/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  createReview(
    @Param('applicationId') applicationId: string,
    @Body() body: any,
  ) {
    const { author, rating, comment } = body;

    return this.reviewsService.create(
      Number(applicationId),
      author,
      Number(rating),
      comment,
    );
  }

  @Get()
  getReviews(@Param('applicationId') applicationId: string) {
    return this.reviewsService.findByApplication(
      Number(applicationId),
    );
  }
}
