const React = require("react");

const Def = require("../default");

const index = (data) => {
    let placesFormatted = data.places.map((place /*, index*/) => {
        return (
            <div className="col-sm-6" key={place.id}>
                <h2>
                    {/* <a href={`/places/${index}`}>{place.name}</a> */}
                    <a href={`/places/${place.id}`}>{place.name}</a>
                </h2>
                <p className="text-center">{place.cuisines}</p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        );
    });
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">{placesFormatted}</div>
            </main>
        </Def>
    );
};

module.exports = index;
