// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3200080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000030000000000000000000004000000040000000000000000000000000004000000000000000000000000000000040000000403000000040000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000304000400000000000004000400000000000000040004000000000000000004000000000004000400000000000400000400030101010101010202010101010101010202010101010101020202010101010101020201010101010102020201010101010101`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
222222..2222222..222222...222222..222222...2222222
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.builtin.forestTiles1,sprites.vehicle.roadVertical,sprites.castle.shrub], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
