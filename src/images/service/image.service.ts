import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from '../entities/image.entity';
import { ImageDTO } from '../dto/image-dto';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>
  ) {}

  public async getAll(): Promise<Image[]> {
    return await this.imageRepository.find();
  }

  public async createImage(imageNew: ImageDTO): Promise<Image> {
    const newImage = new Image();
    newImage.name = imageNew.name;

    return this.imageRepository.save(newImage);
  }
}
