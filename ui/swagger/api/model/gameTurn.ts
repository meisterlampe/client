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


export interface GameTurn {
    gameId: string;
    turn: number;
    round: number;
    playerSteamId: string;
    startDate?: Date;
    endDate?: Date;
    skipped?: boolean;
}
