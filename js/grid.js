/**
 * Grid theme for Highcharts JS
 */

Highcharts.theme = {
	
	chart: {
		
		borderWidth: 0,
		plotShadow: false,
		plotBorderWidth: 0
	},
	title: {
		style: {
			color: '#434753',
			font: 'bold 16px inherit'
		}
	},
	subtitle: {
		style: {
			color: '#707281',
			font: 'bold 12px inherit'
		}
	},
	xAxis: {
		gridLineWidth: 1,
		lineColor: '#e7e7f1',
		tickColor: '#e7e7f1',
		labels: {
			style: {
				color: '#707281',
				font: '11px inherit'
			}
		},
		title: {
			style: {
				color: '#707281',
				fontWeight: 'bold',
				fontSize: '12px'

			}
		}
	},
	yAxis: {
		minorTickInterval: '',
		lineColor: '#e7e7f1',
		lineWidth: 1,
		tickWidth: 1,
		tickColor: '#e7e7f1',
		labels: {
			style: {
				color: '#707281'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px'
			}
		}
	},
	legend: {
		itemStyle: {
			color: 'black'

		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	},

	navigation: {
		buttonOptions: {
			theme: {
				display: 'none'
			}
		}
	}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
