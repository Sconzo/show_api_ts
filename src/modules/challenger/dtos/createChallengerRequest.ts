export interface CreateChallengerRequest {

    challengerName: string;
    score: number;
    sessionId: number;
    cardsLeft: number;
    studentsHelpLeft: number;
    skipsLeft: number;
    audienceHelpLeft: number;
}