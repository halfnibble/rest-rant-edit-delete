const React = require("react");
const Def = require("../default");

const show = (data) => {
    return (
        <Def>
            <main>
                <div className="inline">
                    <div>
                        <img
                            className="img"
                            src={data.place.pic}
                            alt={data.place.name}
                        ></img>
                    </div>
                    <div>
                        <h1>{data.place.name}</h1>

                        <h2>Rating</h2>
                        <p>Not Rated yet...</p>

                        <h2>Description</h2>
                        <p>A place where food is sold...</p>
                    </div>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>Each place sells different food...</p>
                </div>
                <div>
                    <a
                        href={`/places/${data.id}/edit`}
                        className="btn btn-warning"
                    >
                        Edit
                    </a>
                </div>
                <div>
                    <form
                        method="POST"
                        action={`/places/${data.id}?_method=DELETE`}
                    >
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    );
};

module.exports = show;
