import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
export declare class NinjasService {
    private ninjas;
    getNinjas(weapon?: "stars" | "nunchuks"): {
        id: number;
        name: string;
        weapon: string;
    }[];
    getNinja(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
    createNinja(CreateNinjaDto: CreateNinjaDto): {
        id: number;
        name: string;
        weapon: "stars" | "nunchuks";
    };
    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto): {
        id: number;
        name: string;
        weapon: string;
    };
    removeNinja(id: number): {
        id: number;
        name: string;
        weapon: string;
    };
}
