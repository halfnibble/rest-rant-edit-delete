const React = require("react");
const Def = require("../default");

const edit_form = (data) => {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                defaultValue={data.place.name}
                                required
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input
                                className="form-control"
                                type="url"
                                id="pic"
                                name="pic"
                                defaultValue={data.place.pic}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">Place City</label>
                            <input
                                className="form-control"
                                id="city"
                                name="city"
                                defaultValue={data.place.city}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">Place State</label>
                            <input
                                className="form-control"
                                id="state"
                                name="state"
                                defaultValue={data.place.state}
                            />
                        </div>
                        <div className="form-group col-sm-12">
                            <label htmlFor="cuisines">Place Cuisine</label>
                            <input
                                className="form-control"
                                id="cuisines"
                                name="cuisines"
                                required
                                defaultValue={data.place.cuisines}
                            />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Save Place" />
                </form>
            </main>
        </Def>
    );
};

module.exports = edit_form;

/*

<form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  <div className="row">
      <div className="form-group col-sm-6">
          <label htmlFor="name">Place Name</label>
          <input id="name" ... />
      </div>
      <div className="form-group col-sm-6">
          <label htmlFor="pic">Place Picture</label>
          <input id="pic" ... />
      </div>
  </div>


*/
