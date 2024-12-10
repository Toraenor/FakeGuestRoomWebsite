
//could be written better but right now i just needed this
export function DateDiffAsText(date1 : Date, date2 : Date): string {
    const millisecondsDiff: number = Math.abs(date1.getTime() - date2.getTime());
	const dayDiff : number = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));

	let timeDiff: string = 'error';
	if (dayDiff == 0) {
		timeDiff = "Aujourd'hui";
	} else if (dayDiff <= 30) {
		timeDiff = 'Il y a ' + dayDiff.toString() + (dayDiff == 1 ? ' jour' : ' jours');
	} else {
		if (dayDiff / 30 >= 12) {
			const value: number = Math.floor(dayDiff / 365);
			timeDiff = 'Il y a ' + value.toString() + (value == 1 ? ' an' : ' ans');
		} else {
			timeDiff = 'Il y a ' + Math.floor(dayDiff / 30).toString() + ' mois';
		}
	}

    return timeDiff;
  }