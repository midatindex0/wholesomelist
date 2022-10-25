<div class="m-3 md:m-10 bg-gradient-to-br from-red to-green rounded-lg p-1">
	<div class="p-5 bg-crust rounded-lg">
		<div class="text-2xl font-medium">API</div>
		<div>
			Documentation of the unofficial DreamH API for <a
				class="text-yellow"
				href="//wholesomelist.com">wholesomelist</a
			>.
		</div>
	</div>
</div>

<div class="my-5" />

<div class="m-3 md:m-10 rounded-lg bg-crust">
	<div class="hover:bg-mantle p-5">
		<button class=""
			><span class="text-green font-bold bg-surface0 px-2 py-1 rounded">GET</span> /api/list?<span
				class="text-red font-medium">limit</span
			>&<span class="text-peach font-medium">page</span></button
		>
	</div>
	<div class="hover:bg-mantle p-5">
		<button class=""
			><span class="text-green font-bold bg-surface0 px-2 py-1 rounded">GET</span>
			/api/licensed?<span class="text-red font-medium">limit</span>&<span
				class="text-peach font-medium">page</span
			></button
		>
	</div>
	<div class="hover:bg-mantle p-5">
		<button class=""
			><span class="text-green font-bold bg-surface0 px-2 py-1 rounded">GET</span>
			/api/features?<span class="text-red font-medium">limit</span>&<span
				class="text-peach font-medium">page</span
			></button
		>
	</div>
	<div class="hover:bg-mantle p-5">
		<button class=""
			><span class="text-green font-bold bg-surface0 px-2 py-1 rounded">GET</span>
			/api/updates?<span class="text-red font-medium">limit</span>&<span
				class="text-peach font-medium">page</span
			></button
		>
	</div>
	<div class="hover:bg-mantle p-5">
		<button class=""
			><span class="text-green font-bold bg-surface0 px-2 py-1 rounded">GET</span> /api/check?<span
				class="text-red font-medium">code</span
			>
		</button>
	</div>
	<div class="hover:bg-mantle p-5">
		<button class=""
			><span class="text-green font-bold bg-surface0 px-2 py-1 rounded">GET</span> /api/random?<span
				class="text-green px-2 py-1 bg-surface0 rounded mx-2">Too many to fit here</span
			>
		</button>
	</div>
	<div class="hover:bg-mantle p-5">
		<button class=""
			><span class="text-green font-bold bg-surface0 px-2 py-1 rounded">GET</span> /api/search?<span
				class="text-red font-medium">query</span
			>
		</button>
	</div>
	<div class="hover:bg-mantle p-5">
		<button class=""
			><span class="text-green font-bold bg-surface0 px-2 py-1 rounded">GET</span> /api/advsearch?<span
				class="text-green px-2 py-1 bg-surface0 rounded mx-2">Same as random</span
			>
		</button>
	</div>
	<div class="hover:bg-mantle p-5">
		<button class=""
			><span class="text-sky font-bold bg-surface0 px-2 py-1 rounded">POST</span> /api/filter?<span
				class="text-red px-2 py-1 bg-surface0 rounded mx-2">Not implemented yet</span
			>
		</button>
	</div>
</div>

<div class="m-3 md:m-10 rounded-lg bg-crust p-5">
	<div class="text-2xl m-2">/api/list</div>
	<div>Method: <span class="text-green font-bold px-2 py-1 bg-surface0 rounded">GET</span></div>
	<div class="my-2 text-mauve">
		<span class="text-blue font-bold px-2 py-1 bg-surface0 rounded">Example:</span> /api/list?limit=10&page=2
	</div>
	<div class="my-2">
		<span class="text-green font-bold px-2 py-1 bg-surface0 rounded">Response:</span> A JSON table containing
		information about all the list entries.
	</div>
	<div class="m-4">
		Query Params:
		<div class="m-4">
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">limit</span>: Number of
				entries per page (default: -1)
			</div>
			<div class="my-2">
				<span class="text-peach font-bold px-2 py-1 bg-surface0 rounded">page</span>: Page number
				(default: 1)
			</div>
		</div>
	</div>
	<div>
		Response:
		<div class="m-4 rounded bg-base p-4">
			<pre class="overflow-scroll h-[400px]">
				<code class="text-sm">
&lcub;
    "limit": -1,
    "page": 1,
    "startID": 1,
    "endID": -1,
    "table": [
        &lcub;
            "id": 1,
            "hm": "None",
            "nh": "https://nhentai.net/g/169217",
            "eh": "None",
            "im": "None",
            "title": "Torakaburi??",
            "author": "Kiiroi Tamago",
            "note": "None",
            "parody": "None",
            "tier": "S",
            "pages": "24",
            "misc": "None",
            "siteTags": &lcub;
                "tags": [
                    "sole female",
                    "sole male",
                    "schoolgirl uniform",
                    "mosaic censorship",
                    "defloration",
                    "schoolboy uniform",
                    "condom",
                    "virginity"
                ],
                "characters": []
            &rcub;,
            "image": "https://wholesomelist.com/asset/c0dce112-56c9-4246-8474-5ced0f7d8387.jpg",
            "uuid": "c0dce112-56c9-4246-8474-5ced0f7d8387",
            "tags": [
                "Handholding",
                "High School",
                "Tsundere"
            ],
            "link": "https://nhentai.net/g/169217"
        &rcub;,...
				</code>
			</pre>
		</div>
	</div>
</div>

<div class="m-3 md:m-10 rounded-lg bg-crust p-5">
	<div class="text-2xl m-2">/api/licensed</div>
	<div>Method: <span class="text-green font-bold px-2 py-1 bg-surface0 rounded">GET</span></div>
	<div class="my-2 text-mauve">
		<span class="text-blue font-bold px-2 py-1 bg-surface0 rounded">Example:</span> /api/licensed?limit=10&page=2
	</div>
	<div class="my-2">
		<span class="text-green font-bold px-2 py-1 bg-surface0 rounded">Response:</span> A JSON table containing
		information about all the licensed list entries.
	</div>
	<div class="m-4">
		Query Params:
		<div class="m-4">
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">limit</span>: Number of
				entries per page (default: -1)
			</div>
			<div class="my-2">
				<span class="text-peach font-bold px-2 py-1 bg-surface0 rounded">page</span>: Page number
				(default: 1)
			</div>
		</div>
	</div>
	<div>
		Response:
		<div class="m-4 rounded bg-base p-4">
			<pre class="overflow-scroll h-[400px]">
				<code class="text-sm">
&lcub;
    "limit": -1,
    "page": 1,
    "startID": 1,
    "endID": -1,
    "table": [
        &lcub;
            "id": 1,
            "title": "Mistaken Love",
            "author": "Suruga Kuroitsu",
            "note": "None",
            "parody": "None",
            "tier": "S",
            "pages": "30",
            "misc": "None",
            "siteTags": "None",
            "image": "https://wholesomelist.com/asset/401fbf46-450c-4efc-bb5f-cfb6cd7e6c21.jpg",
            "uuid": "401fbf46-450c-4efc-bb5f-cfb6cd7e6c21",
            "tags": [
                "Couple",
                "Gyaru",
                "Handholding",
                "High School",
                "Tall",
                "Tomboy",
                "Tsundere"
            ],
            "link": "https://www.fakku.net/hentai/mistaken-love-english"
        &rcub;,
				</code>
			</pre>
		</div>
	</div>
</div>

<div class="m-3 md:m-10 rounded-lg bg-crust p-5">
	<div class="text-2xl m-2">/api/features</div>
	<div>Method: <span class="text-green font-bold px-2 py-1 bg-surface0 rounded">GET</span></div>
	<div class="my-2 text-mauve">
		<span class="text-blue font-bold px-2 py-1 bg-surface0 rounded">Example:</span> /api/features?limit=10&page=2
	</div>
	<div class="my-2">
		<span class="text-green font-bold px-2 py-1 bg-surface0 rounded">Response:</span> A JSON table containing
		information about all the currently featured doujins (from the front page of wholesomelist.com).
	</div>
	<div class="m-4">
		Query Params:
		<div class="m-4">
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">limit</span>: Number of
				entries per page (default: -1)
			</div>
			<div class="my-2">
				<span class="text-peach font-bold px-2 py-1 bg-surface0 rounded">page</span>: Page number
				(default: 1)
			</div>
		</div>
	</div>
	<div>
		Response:
		<div class="m-4 rounded bg-base p-4">
			<pre class="overflow-scroll h-[400px]">
				<code class="text-sm">
&lcub;
    "limit": -1,
    "page": 1,
    "startID": 1,
    "endID": -1,
    "table": [
        &lcub;
            "link": "https://wholesomelist.com/list/76da199e-6e98-4b1c-90fb-39492dedfdd5",
            "title": "Bokura wa ○○ Hanare ga Dekina Ketsuron",
            "author": "Herio",
            "tier": "S-",
            "img": "https://wholesomelist.com/asset/76da199e-6e98-4b1c-90fb-39492dedfdd5.jpg"
        &rcub;,
        &lcub;
            "link": "https://wholesomelist.com/list/569a6bf2-d23e-4184-aee8-b0342f156a0f",
            "title": "A Clumsy Ulterior Motive",
            "author": "Tamabi",
            "tier": "S-",
            "img": "https://wholesomelist.com/asset/569a6bf2-d23e-4184-aee8-b0342f156a0f.jpg"
        &rcub;,
        &lcub;
            "link": "https://wholesomelist.com/list/72dfd6dd-027e-467a-a823-20d7496f6f46",
            "title": "Wankoro",
            "author": "Inomoto Rikako",
            "tier": "S",
            "img": "https://wholesomelist.com/asset/72dfd6dd-027e-467a-a823-20d7496f6f46.jpg"
        &rcub;,
        &lcub;
            "link": "https://wholesomelist.com/list/6b201af3-03c4-4862-969c-cba4da400b05",
            "title": "How to Make a Smile",
            "author": "Syoukaki",
            "tier": "S",
            "img": "https://wholesomelist.com/asset/6b201af3-03c4-4862-969c-cba4da400b05.jpg"
        &rcub;
    ]
&rcub;				</code>
			</pre>
		</div>
	</div>
</div>

<div class="m-3 md:m-10 rounded-lg bg-crust p-5">
	<div class="text-2xl m-2">/api/updates</div>
	<div>Method: <span class="text-green font-bold px-2 py-1 bg-surface0 rounded">GET</span></div>
	<div class="my-2 text-mauve">
		<span class="text-blue font-bold px-2 py-1 bg-surface0 rounded">Example:</span> /api/updates?limit=10&page=2
	</div>
	<div class="my-2">
		<span class="text-green font-bold px-2 py-1 bg-surface0 rounded">Response:</span> A JSON table containing
		information about the 10 most recently-added doujins in the list. Includes a UNIX timestamp of when
		the title was added (in milliseconds).
	</div>
	<div class="m-4">
		Query Params:
		<div class="m-4">
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">limit</span>: Number of
				entries per page (default: -1)
			</div>
			<div class="my-2">
				<span class="text-peach font-bold px-2 py-1 bg-surface0 rounded">page</span>: Page number
				(default: 1)
			</div>
		</div>
	</div>
	<div>
		Response:
		<div class="m-4 rounded bg-base p-4">
			<pre class="overflow-scroll h-[400px]">
				<code class="text-sm">
&lcub;
    "limit": -1,
    "page": 1,
    "startID": 1,
    "endID": -1,
    "table": [
        &lcub;
            "title": "Delusion Dreamer",
            "author": "Doi Sakazaki",
            "link": "https://wholesomelist.com/list/28a663bc-4f3c-425e-8fc5-05f8951a1326",
            "tier": "B+",
            "time": "1665008344608",
            "date": "17 days"
        &rcub;,
        &lcub;
            "title": "Temptation Beneath The Swimsuit",
            "author": "Gustav",
            "link": "https://wholesomelist.com/list/5b921d9b-221c-444a-8962-a8856cd32e2e",
            "tier": "C+",
            "time": "1665008206449",
            "date": "17 days"
        &rcub;,
        &lcub;
            "title": "Turning Pure White",
            "author": "Asagi Ryu",
            "link": "https://wholesomelist.com/list/49e511c0-878d-40b5-bc2d-897610afcfc5",
            "tier": "A",
            "time": "1665007946290",
            "date": "17 days"
        &rcub;,
        &lcub;
            "title": "My Big-Titted Plump Girlfriend's Bad For My Cock 1-3",
            "author": "Oltlo",
            "link": "https://wholesomelist.com/list/c1a1ea5d-b720-43db-a26a-4fb81f512761",
            "tier": "C+",
            "time": "1665007737989",
            "date": "17 days"
        &rcub;,
        &lcub;
            "title": "Princess of the Demon World - Hien-sama",
            "author": "Itouya",
            "link": "https://wholesomelist.com/list/54904bab-3dc9-415c-896d-55995535e46e",
            "tier": "B",
            "time": "1665007693801",
            "date": "17 days"
        &rcub;,
        &lcub;
            "title": "Yoru Yahagi 10",
            "author": "Ichinomiya",
            "link": "https://wholesomelist.com/list/be843c2f-df1b-4392-8dba-170caed4aa85",
            "tier": "A",
            "time": "1665007646352",
            "date": "17 days"
        &rcub;,
        &lcub;
            "title": "Yoru Yahagi 9 - Light Cruiser Yahagi Fell In Love - Third",
            "author": "Ichinomiya",
            "link": "https://wholesomelist.com/list/4c6a98cd-b033-42b3-897e-7840cc8b8c8a",
            "tier": "A",
            "time": "1665007602262",
            "date": "17 days"
        &rcub;,
        &lcub;
            "title": "RAINBOW SEX Girl's Frontline",
            "author": "Huan Shou Qilin",
            "link": "https://wholesomelist.com/list/847cabc1-9ad0-4722-b6f4-59dda1c5b9e4",
            "tier": "C",
            "time": "1665007531243",
            "date": "17 days"
        &rcub;,
        &lcub;
            "title": "RAINBOW SEX HK416",
            "author": "Huan Shou Qilin",
            "link": "https://wholesomelist.com/list/4e17f924-6c22-42e6-af02-62d3a1d7bd12",
            "tier": "C",
            "time": "1665007473232",
            "date": "17 days"
        &rcub;
    ]
&rcub;
				</code>
			</pre>
		</div>
	</div>
</div>

<div class="m-3 md:m-10 rounded-lg bg-crust p-5">
	<div class="text-2xl m-2">/api/check</div>
	<div>Method: <span class="text-green font-bold px-2 py-1 bg-surface0 rounded">GET</span></div>
	<div class="my-2 text-mauve">
		<span class="text-blue font-bold px-2 py-1 bg-surface0 rounded">Example:</span> /api/check?code=169217
	</div>
	<div class="my-2">
		<span class="text-green font-bold px-2 py-1 bg-surface0 rounded">Response:</span> A result, which
		is either true or false depending on if the doujin was found or not, and if it was, information about
		the corresponding entry.
	</div>
	<div class="m-4">
		Query Params:
		<div class="m-4">
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">code</span>: Nhentai id/Imgur
				hash to check (required)
			</div>
		</div>
	</div>
	<div>
		Response:
		<div class="m-4 rounded bg-base p-4">
			<pre class="overflow-scroll h-[400px]">
				<code class="text-sm">
&lcub;
    "result": true,
    "entry": &lcub;
        "id": 1,
        "hm": "None",
        "nh": "https://nhentai.net/g/169217",
        "eh": "None",
        "im": "None",
        "title": "Torakaburi??",
        "author": "Kiiroi Tamago",
        "note": "None",
        "parody": "None",
        "tier": "S",
        "pages": "24",
        "misc": "None",
        "siteTags": &lcub;
            "tags": [
                "sole female",
                "sole male",
                "schoolgirl uniform",
                "mosaic censorship",
                "defloration",
                "schoolboy uniform",
                "condom",
                "virginity"
            ],
            "characters": []
        &rcub;,
        "image": "https://wholesomelist.com/asset/c0dce112-56c9-4246-8474-5ced0f7d8387.jpg",
        "uuid": "c0dce112-56c9-4246-8474-5ced0f7d8387",
        "tags": [
            "Handholding",
            "High School",
            "Tsundere"
        ],
        "link": "https://nhentai.net/g/169217"
    &rcub;
&rcub;
				</code>
			</pre>
		</div>
	</div>
</div>

<div class="m-3 md:m-10 rounded-lg bg-crust p-5">
	<div class="text-2xl m-2">/api/random</div>
	<div>Method: <span class="text-green font-bold px-2 py-1 bg-surface0 rounded">GET</span></div>
	<div class="my-2 text-mauve">
		<span class="text-blue font-bold px-2 py-1 bg-surface0 rounded">Example:</span> /api/random?tier=s,b&tag=childhood
		friend,couple
	</div>
	<div class="my-2">
		<span class="text-green font-bold px-2 py-1 bg-surface0 rounded">Response:</span> A random entry from the God List.
	</div>
	<div class="m-4">
		Query Params (multiple values should be comma seperated, spaces allowed):
		<div class="m-4">
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">author</span>: Only entries
				from specified author(s) (default: all)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">tier</span>: Only entries
				from specified tier(s) (default: all)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">pg</span>: Only entries with
				pages greater than (default: 0)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">pl</span>: Only entries with
				pages greater than (default: 10000)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">parody</span>: Only entries
				of specified parody/parodies (default: all)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">tagOP</span>: Operation on
				tags: "OR"/"AND" (default: "AND")
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">et</span>: Exclude tag(s)
				(default: none)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">tag</span>: Only with with
				specified tag(s) (default: any)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">characterOP</span>: Operation
				on characters: "OR"/"AND" (default: "AND")
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">character</span>: Only with
				with specified character(s) (default: any)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">siteTag</span>: Only entries
				from specified site tag(s) (default: any)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">limit</span>: Number of
				entries to return (default: 1)
			</div>
		</div>
	</div>
	<div>
		Response:
		<div class="m-4 rounded bg-base p-4">
			<pre class="overflow-scroll h-[400px]">
				<code class="text-sm">
&lcub;
    "author": null,
    "tier": null,
    "pageGreaterThan": 0,
    "pageLessThan": 10000,
    "parody": null,
    "tagOP": "AND",
    "tag": null,
    "characterOP": "AND",
    "character": null,
    "siteTag": null,
    "entries": [
        &lcub;
            "id": 2567,
            "hm": "None",
            "nh": "https://nhentai.net/g/363587",
            "eh": "https://e-hentai.org/g/1939735/3a67b1f1b6/",
            "im": "None",
            "title": "Yarazu no Shunrin",
            "author": "Omecho",
            "note": "Crossdressing Boy, Urination, Exhibitionism, Drunk",
            "parody": "None",
            "tier": "A+",
            "pages": "38",
            "misc": "None",
            "siteTags": &lcub;
                "tags": [
                    "male:anal",
                    "male:anal intercourse",
                    "male:blowjob",
                    "male:males only",
                    "male:tomgirl",
                    "male:yaoi",
                    "other:multi-work series"
                ],
                "characters": []
            &rcub;,
            "image": "https://wholesomelist.com/asset/78b80a3e-f27c-404f-9aff-f95652c0a7c9.jpg",
            "uuid": "78b80a3e-f27c-404f-9aff-f95652c0a7c9",
            "tags": [
                "College",
                "Couple",
                "Handholding",
                "Short",
                "Yaoi"
            ],
            "link": "https://nhentai.net/g/363587"
        &rcub;
    ]
&rcub;
				</code>
			</pre>
		</div>
	</div>
</div>

<div class="m-3 md:m-10 rounded-lg bg-crust p-5">
	<div class="text-2xl m-2">/api/search</div>
	<div>Method: <span class="text-green font-bold px-2 py-1 bg-surface0 rounded">GET</span></div>
	<div class="my-2 text-mauve">
		<span class="text-blue font-bold px-2 py-1 bg-surface0 rounded">Example:</span> /api/search?query=senpai kouhai
	</div>
	<div class="my-2">
		<span class="text-green font-bold px-2 py-1 bg-surface0 rounded">Response:</span> Entries that match the search query.
	</div>
	<div class="m-4">
		Query Params:
		<div class="m-4">
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">limit</span>: Number of
				entries per page (default: -1)
			</div>
			<div class="my-2">
				<span class="text-peach font-bold px-2 py-1 bg-surface0 rounded">page</span>: Page number
				(default: 1)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">query</span>: Query string to
				search (required)
			</div>
		</div>
	</div>
	<div>
		Response:
		<div class="m-4 rounded bg-base p-4">
			<pre class="overflow-scroll h-[400px]">
				<code class="text-sm">
&lcub;
    "limit": -1,
    "page": 1,
    "table": [
        &lcub;
            "entry": &lcub;
                "id": 318,
                "hm": "None",
                "nh": "https://nhentai.net/g/166498",
                "eh": "https://e-hentai.org/g/944713/74fc958394/",
                "im": "None",
                "title": "Senpai Kouhai a Man and Woman's Circumstances",
                "author": "Kikunosukemaru",
                "note": "Drunk",
                "parody": "None",
                "tier": "B",
                "pages": "18",
                "misc": "None",
                "siteTags": &lcub;
                    "tags": [
                        "male:drunk",
                        "male:sole male",
                        "female:defloration",
                        "female:drunk",
                        "female:nakadashi",
                        "female:sole female"
                    ],
                    "characters": []
                &rcub;,
                "image": "https://wholesomelist.com/asset/d10d118f-47ba-44f2-acdb-bf92d985cf97.jpg",
                "uuid": "d10d118f-47ba-44f2-acdb-bf92d985cf97",
                "tags": [
                    "College"
                ],
                "link": "https://nhentai.net/g/166498"
            &rcub;,
            "score": 56.21529747121348
        &rcub;,...
				</code>
			</pre>
		</div>
	</div>
</div>

<div class="m-3 md:m-10 rounded-lg bg-crust p-5">
	<div class="text-2xl m-2">/api/advsearch</div>
	<div>Method: <span class="text-green font-bold px-2 py-1 bg-surface0 rounded">GET</span></div>
	<div class="my-2 text-mauve">
		<span class="text-blue font-bold px-2 py-1 bg-surface0 rounded">Example:</span> /api/advsearch?tier=s,b&tag=childhood
		friend,couple
	</div>
	<div class="my-2">
		<span class="text-green font-bold px-2 py-1 bg-surface0 rounded">Response:</span> All entries after filtering with specified params.
	</div>
	<div class="m-4">
		Query Params (multiple values should be comma seperated, spaces allowed):
		<div class="m-4">
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">author</span>: Only entries
				from specified author(s) (default: all)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">tier</span>: Only entries
				from specified tier(s) (default: all)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">pg</span>: Only entries with
				pages greater than (default: 0)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">pl</span>: Only entries with
				pages greater than (default: 10000)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">parody</span>: Only entries
				of specified parody/parodies (default: all)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">tagOP</span>: Operation on
				tags: "OR"/"AND" (default: "AND")
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">et</span>: Exclude tag(s)
				(default: none)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">tag</span>: Only with with
				specified tag(s) (default: any)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">characterOP</span>: Operation
				on characters: "OR"/"AND" (default: "AND")
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">character</span>: Only with
				with specified character(s) (default: any)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">siteTag</span>: Only entries
				from specified site tag(s) (default: any)
			</div>
			<div class="my-2">
				<span class="text-red font-bold px-2 py-1 bg-surface0 rounded">limit</span>: Number of
				entries to return (default: 1)
			</div>
		</div>
	</div>
	<div>
		Response:
		<div class="m-4 rounded bg-base p-4">
			<pre class="overflow-scroll h-[400px]">
				<code class="text-sm">
&lcub;
    "author": null,
    "tier": [
        "s",
        "b"
    ],
    "pageGreaterThan": 0,
    "pageLessThan": 10000,
    "parody": null,
    "tagOP": "AND",
    "tag": [
        "childhood friend",
        "couple"
    ],
    "characterOP": "AND",
    "character": null,
    "siteTag": null,
    "entries": [
        &lcub;
            "id": 240,
            "hm": "None",
            "nh": "https://nhentai.net/g/77699",
            "eh": "https://e-hentai.org/g/506743/fbffa614f5/",
            "im": "None",
            "title": "Moment Like Fireworks",
            "author": "Nanzaki Iku",
            "note": "Outdoor Sex",
            "parody": "None",
            "tier": "B",
            "pages": "18",
            "misc": "None",
            "siteTags": &lcub;
                "tags": [
                    "female:females only",
                    "female:kimono",
                    "female:yuri"
                ],
                "characters": []
            &rcub;,
            "image": "https://wholesomelist.com/asset/c4d3d969-1388-4c6d-842a-691c8b9d1443.jpg",
            "uuid": "c4d3d969-1388-4c6d-842a-691c8b9d1443",
            "tags": [
                "Childhood Friend",
                "Couple",
                "Handholding",
                "Yuri"
            ],
            "link": "https://nhentai.net/g/77699"
        &rcub;,...
				</code>
			</pre>
		</div>
	</div>
</div>