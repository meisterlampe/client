/**
 * serverless-api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GamePlayer } from './gamePlayer';


export interface Game {
    gameId: string;
    createdBySteamId: string;
    inProgress?: boolean;
    hashedPassword?: string;
    players: Array<GamePlayer>;
    discourseTopicId?: number;
    currentPlayerSteamId: string;
    turnTimerMinutes?: number;
    round?: number;
    gameTurnRangeKey?: number;
    completed?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    version?: number;
    displayName: string;
    description?: string;
    dlc: Array<string>;
    slots: number;
    humans: number;
    gameSpeed: string;
    mapFile?: string;
    mapSize: string;
    allowJoinAfterStart?: boolean;
}
