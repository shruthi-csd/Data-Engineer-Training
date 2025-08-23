import pandas as pd


df = pd.read_csv("energy_logs.csv", parse_dates=["timestamp"])


df["date"] = df["timestamp"].dt.date
daily = df.groupby(["device_id", "date"])["energy_kwh"].sum().reset_index()


alerts = daily[daily["energy_kwh"] > 10]


daily.to_csv("reports/daily_summary.csv", index=False)
alerts.to_csv("reports/alerts.csv", index=False)

print(" Daily summary generated")
if not alerts.empty:
    print(" ALERT: High energy usage detected!")
    print(alerts.head())
else:
    print("No alerts triggered")
