const domContainer = document.querySelector('#contentarea');
console.log(domContainer);
ReactDOM.render(<Home />, domContainer);
let mapReady = false,
	map = null;
const dataPoints = [
	[31.476510223763427, 74.36202120711368],
	[31.466148304259825, 74.34270934649093],
	[31.46131735544792, 74.3932639945143],
	[31.467062915862037, 74.40064758525618],
	[31.45557144619363, 74.35494267056355],
	[31.461609381240383, 74.39729825409071],
	[31.474786404790677, 74.40266769951788],
	[31.504725698422806, 74.36695772533584],
];
function Home() {
	return (
		<div>
			<Header />
			<Content />
		</div>
	);
}

function Header() {
	return (
		<div id="header">
			<img src="./images/logo.png" />
			<img
				src="./images/menu_icon.png"
				className={'h-op20'}
				onClick={() => alert('menu')}
			/>
		</div>
	);
}

function Content() {
	return (
		<div id="content">
			<MapCom />
			<WalkForm />
		</div>
	);
}

function MapCom() {
	return <div id="map"></div>;
}

const onPress = ({ distance, postcode, types }) => {
	console.log(distance, postcode, types);
	if (map) {
		var markerBounds = new google.maps.LatLngBounds();
		var randomPoint;
		dataPoints.forEach((point) => {
			randomPoint = new google.maps.LatLng(point[0], point[1]);
			// Draw a marker for each random point
			new google.maps.Marker({
				position: randomPoint,
				map: map,
				icon: './images/marker.png',
			});
			markerBounds.extend(randomPoint);
		});
		map.fitBounds(markerBounds);
	}
};

function WalkForm() {
	const [distance, setDistance] = React.useState(25);
	const [postcode, setPostcode] = React.useState('');
	const [types, setTypes] = React.useState({ child: true, flat: false });

	return (
		<div id="walk-form">
			<span className="title">Explore stroller friendly walks</span>
			<div className="greenDash"></div>
			<div className="input-round-icon" style={{ marginTop: 26 }}>
				<i className="input-search"></i>
				<input
					className=""
					type="text"
					placeholder="Postcode, Town or city"
					name="usrnm"
					value={postcode}
					onChange={(e) => setPostcode(e.target.value)}
				/>
			</div>
			<div id="walk-distance">
				<p htmlFor="distance-range">
					<span>Distance?</span>
					{distance} miles
				</p>
				<input
					type="range"
					min="1"
					max="100"
					step="1"
					id="distance-range"
					value={distance}
					onChange={(e) => setDistance((prev) => e.target.value)}
				/>
			</div>

			<div id="walk-types">
				<span>I’m looking for?</span>
				<div>
					<div className="walk-type">
						<input
							name="child"
							type="checkbox"
							checked={types.child}
							onChange={() => {}}
						/>

						<span
							className="checkmark"
							onClick={(e) =>
								setTypes((prevSate) => ({
									child: !prevSate.child,
									flat: prevSate.flat,
								}))
							}
						></span>
						<label className="">Child friendly</label>
					</div>
					<div className="walk-type">
						<input
							name="flat"
							type="checkbox"
							checked={types.flat}
							onChange={() => {}}
						/>

						<span
							className="checkmark"
							onClick={(e) =>
								setTypes((prevSate) => ({
									child: prevSate.child,
									flat: !prevSate.flat,
								}))
							}
						></span>
						<label className="">Flat terrain</label>
					</div>
				</div>
			</div>
			<div
				id="walk-submit"
				onClick={() => onPress({ distance, postcode, types })}
			>
				<span>Find a walk</span>
			</div>
		</div>
	);
}
