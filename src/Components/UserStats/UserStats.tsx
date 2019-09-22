import React from "react";
import { IAppUserStatsState } from "../../App";
import { Card, ListGroup } from "react-bootstrap";

interface IUserStats {
  userStats: IAppUserStatsState;
}
export const UserStats: React.FC<IUserStats> = (
  props: IUserStats
): JSX.Element => {
  const { userStats } = props;
  const { gamesWon, gamesLost } = userStats;
  return (
    <Card className="text-center">
      <Card.Header>User Stats</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>games Won: {gamesWon}</ListGroup.Item>
          <ListGroup.Item>games Lost: {gamesLost}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
