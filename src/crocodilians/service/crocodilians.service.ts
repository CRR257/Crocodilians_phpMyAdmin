import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crocodilian } from '../entities/crocodilian.entity';
import { CrocodilianDTO } from '../dto/crocodilian-dto';

@Injectable()
export class CrocodilianService {
  constructor(
    @InjectRepository(Crocodilian)
    private readonly crocodilianRepository: Repository<Crocodilian>
  ) {}

  public async getAll(): Promise<Crocodilian[]> {
    return await this.crocodilianRepository.find();
  }

  public async getCrocodilian(idCrocodilian: number): Promise<Crocodilian> {
    return await this.crocodilianRepository.findOne(idCrocodilian);
  }

  public async createCrocodilian(crocodilianNew: CrocodilianDTO): Promise<Crocodilian> {
    const newCrocodilian = new Crocodilian();
    newCrocodilian.name = crocodilianNew.name;
    newCrocodilian.breed = crocodilianNew.breed;
    newCrocodilian.age = crocodilianNew.age;
    newCrocodilian.image = crocodilianNew.image;
    return this.crocodilianRepository.save(newCrocodilian);
  }

  public async updateCrocodilian(idCrocodilian: number, crocodilianUpdate: CrocodilianDTO): Promise<Crocodilian> {
    const crocodilianToUpdate = await this.crocodilianRepository.findOne(idCrocodilian);
    crocodilianToUpdate.name = crocodilianUpdate.name;
    crocodilianToUpdate.breed = crocodilianUpdate.breed;
    crocodilianToUpdate.age = crocodilianUpdate.age;
    crocodilianToUpdate.image = crocodilianUpdate.image;

    return await this.crocodilianRepository.save(crocodilianToUpdate);
  }

  public async deleteCrocodilian(idCrocodilian: number): Promise<any> {
    return await this.crocodilianRepository.delete(idCrocodilian);
  }
}
