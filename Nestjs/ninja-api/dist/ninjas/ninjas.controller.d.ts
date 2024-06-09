import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
export declare class NinjasController {
    private readonly ninjasService;
    constructor(ninjasService: NinjasService);
    getNinjas(weapon: "stars" | "nunchuks"): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getOneNinja(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
    CreateNinja(CreateNinjaDto: CreateNinjaDto): {
        id: number;
        name: string;
        weapon: "stars" | "nunchuks";
    };
    updateNinja(id: string, updateNinjaDto: UpdateNinjaDto): {
        id: number;
        name: string;
        weapon: string;
    };
    removeNinja(id: string): {
        id: number;
        name: string;
        weapon: string;
    };
}
