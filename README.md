<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premier League Table</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            text-align: center;
            font-family: Arial, sans-serif;
            min-width: 1400px; /* Ensures horizontal scroll for smaller screens */
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
        .club-icon {
            width: 30px;
            height: 30px;
            vertical-align: middle;
        }
        .last-5 span {
            margin: 0 2px;
            font-size: 1.2em;
        }
        .win {
            color: green;
        }
        .draw {
            color: gray;
        }
        .loss {
            color: red;
        }
        .table-container {
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>Premier League Table</h1>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Club</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Pts</th>
                    <th>Last 5</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img class="club-icon" src="liverpool.png"> Liverpool</td>
                    <td>22</td>
                    <td>16</td>
                    <td>5</td>
                    <td>1</td>
                    <td>54</td>
                    <td>21</td>
                    <td>33</td>
                    <td>53</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="manu.jpeg"> Manchester United</td>
                    <td>23</td>
                    <td>14</td>
                    <td>4</td>
                    <td>5</td>
                    <td>42</td>
                    <td>25</td>
                    <td>17</td>
                    <td>46</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="arsenal.png"> Arsenal</td>
                    <td>23</td>
                    <td>13</td>
                    <td>8</td>
                    <td>2</td>
                    <td>44</td>
                    <td>21</td>
                    <td>23</td>
                    <td>47</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="nottingham.jpeg "> Nottingham Forest</td>
                    <td>23</td>
                    <td>13</td>
                    <td>5</td>
                    <td>5</td>
                    <td>33</td>
                    <td>27</td>
                    <td>6</td>
                    <td>44</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                        <span class="loss">❌</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="chelsea.png"> Chelsea</td>
                    <td>23</td>
                    <td>12</td>
                    <td>5</td>
                    <td>6</td>
                    <td>41</td>
                    <td>27</td>
                    <td>14</td>
                    <td>41</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="mancity.jpeg"> Manchester City</td>
                    <td>23</td>
                    <td>12</td>
                    <td>5</td>
                    <td>6</td>
                    <td>47</td>
                    <td>30</td>
                    <td>17</td>
                    <td>41</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                        <span class="loss">❌</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="tottenham.png"> Tottenham</td>
                    <td>23</td>
                    <td>12</td>
                    <td>6</td>
                    <td>5</td>
                    <td>36</td>
                    <td>30</td>
                    <td>6</td>
                    <td>42</td>
                    <td class="last-5">
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                        <span class="win">✔</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="aston villa.jpeg"> Aston Villa</td>
                    <td>23</td>
                    <td>11</td>
                    <td>6</td>
                    <td>6</td>
                    <td>30</td>
                    <td>28</td>
                    <td>2</td>
                    <td>39</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                        <span class="loss">❌</span>
                        <span class="draw">➖</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="wolves.png"> Wolves</td>
                    <td>23</td>
                    <td>10</td>
                    <td>7</td>
                    <td>6</td>
                    <td>35</td>
                    <td>28</td>
                    <td>7</td>
                    <td>37</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="ipswich.png"> Ipswich</td>
                    <td>23</td>
                    <td>10</td>
                    <td>5</td>
                    <td>8</td>
                    <td>26</td>
                    <td>20</td>
                    <td>6</td>
                    <td>35</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                        <span class="loss">❌</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="bournemouth.jpeg"> Bournemouth</td>
                    <td>23</td>
                    <td>9</td>
                    <td>8</td>
                    <td>6</td>
                    <td>31</td>
                    <td>27</td>
                    <td>4</td>
                    <td>35</td>
                    <td class="last-5">
                        <span class="draw">➖</span>
                        <span class="loss">❌</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="win">✔</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="west ham.png"> West Ham</td>
                    <td>23</td>
                    <td>9</td>
                    <td>6</td>
                    <td>8</td>
                    <td>32</td>
                    <td>30</td>
                    <td>2</td>
                    <td>33</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="crystal palace.jpeg"> Crystal Palace</td>
                    <td>23</td>
                    <td>8</td>
                    <td>7</td>
                    <td>8</td>
                    <td>30</td>
                    <td>32</td>
                    <td>-2</td>
                    <td>31</td>
                    <td class="last-5">
                        <span class="loss">❌</span>
                        <span class="draw">➖</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="brentford.png"> Brentford</td>
                    <td>23</td>
                    <td>8</td>
                    <td>7</td>
                    <td>8</td>
                    <td>28</td>
                    <td>25</td>
                    <td>3</td>
                    <td>31</td>
                    <td class="last-5">
                        <span class="loss">❌</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                        <span class="draw">➖</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="fulham.jpeg"> Fulham</td>
                    <td>23</td>
                    <td>8</td>
                    <td>5</td>
                    <td>10</td>
                    <td>25</td>
                    <td>27</td>
                    <td>-2</td>
                    <td>29</td>
                    <td class="last-5">
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                        <span class="loss">❌</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="everton.jpeg"> Everton</td>
                    <td>23</td>
                    <td>7</td>
                    <td>4</td>
                    <td>12</td>
                    <td>24</td>
                    <td>32</td>
                    <td>-8</td>
                    <td>25</td>
                    <td class="last-5">
                        <span class="loss">❌</span>
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                        <span class="win">✔</span>
                        <span class="loss">❌</span>
                    </td>
                </tr>
                <tr>
                    <td><img class="club-icon" src="southampton.png"> Southampton</td>
                    <td>23</td>
                    <td>6</td>
                    <td>3</td>
                    <td>14</td>
                    <td>20</td>
                    <td>40</td>
                    <td>-20</td>
                    <td>21</td>
                    <td class="last-5">
                        <span class="loss">❌</span>
                        <span class="loss">❌</span>
                        <span class="win">✔</span>
                        <span class="draw">➖</span>
                        <span class="loss">❌</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
