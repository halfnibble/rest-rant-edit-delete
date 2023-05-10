// Part 5: this file was added for part 5
const React = require("react");
const Def = require("../default");

const new_form = () => {
    return (
        <Def>
            <main>
                <h1>Add a new place</h1>
                <form method="POST" action="/places">
                    <div className="form-group col-sm-12">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="cuisines">Place Cuisine</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="city">Place City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="state">Place State</label>
                        <input className="form-control" id="state" name="state" />
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="founded">Founded Year</label>
                        <input
                            type="number"
                            className="form-control"
                            id="founded"
                            name="founded"
                            defaultValue={new Date().getFullYear()}
                        />
                    </div>

                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    );
};

module.exports = new_form;
