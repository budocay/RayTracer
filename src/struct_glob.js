function	pos(a, b, c)
{
    var posa =
	{
	    x: a,
	    y: b,
	    z: c
	};
    return (posa);
}

function	global()
{
    var glob =
	{
	    x: 0,
	    y: 0,
	    img: 0,
	    win: 0,
	    eye: pos(0, 0, -3000),
	    vis: pos(100, 0, 0),
	    ambiant: 0.3
	};
    return (glob);
}

function glob2()
{
    var glob =
	{
	    eye: pos(0, 0, -4000),
	    vis: pos(100, 0, 0)
	};
    return (glob);
}

function light()
{
    var glob =
	{
	    l1x: 600,
	    l1y: 200,
	    l1z: -3000,
	    l2x: -1000,
	    l2y: 1500,
	    l2z: 0
	};
    return (glob);
}
