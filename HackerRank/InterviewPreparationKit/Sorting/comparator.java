class Checker implements Comparator<Player> {
	public int compare(Player a, Player b) {
        if (b.score == a.score) {
            return a.name.compareTo(b.name);
        }
        return b.score-a.score;
    }
}