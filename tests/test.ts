import got from "got";

describe("## test http2", () => {
    it("should work :(", async () => {
        await got("https://google.com", {
            http2: true,
        });
    }, 20000);

    it("works without http2", async () => {
        await got("https://google.com", {
            http2: false,
        });
    }, 20000);
});
