,
    {
      "mark": {
        "type": "text",
        "align": "right",
        "baseline": "middle",
        "dx": -390,
        "dy": 85,
        "fontSize": 11.5,
        "fontStyle": "italic"
      },
      "encoding": {
        "text": {
          "field": "state",
          "type": "nominal"
        },
        "opacity": {
          "condition": {
            "test": "datum.state == 'Putrajaya'",
            "value": 1
          },
          "value": 0
        },
        "color": {
          "value": "black"
        }
      }
    }