import { ArrayMinSize, IsDate, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateEventDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    eventName: string;
  
    @IsNotEmpty()
    @IsDate()
    eventDateFrom: Date;
  
    @IsNotEmpty()
    @IsDate()
    eventDateTo: Date;
  
    @IsNotEmpty()
    @IsString()
    description: string;
  
    @IsOptional()
    authors?: number[];
  }

  export class UpdateEventDto {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    eventName?: string;
  
    @IsOptional()
    @IsDate()
    eventDateFrom?: Date;
  
    @IsOptional()
    @IsDate()
    eventDateTo?: Date;
  
    @IsOptional()
    @IsString()
    description?: string;
  
    @IsOptional()
    authors?: number[];
  }