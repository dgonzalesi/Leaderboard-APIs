export default class Leaderboard {
  constructor(props) {
    this.props = props;
    this.state = {
      leaderboard: [],
      loading: true,
    };
  }
}