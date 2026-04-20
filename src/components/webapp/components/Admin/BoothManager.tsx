"use client";

import React, { useState, useEffect } from "react";
import { Button, App } from "antd";
import { CardBase, CardInside, Divider } from "@/components/webapp/components/Layout/CardComp";
import { mockSupabaseStalls, StatusLevel } from "@/components/webapp/scripts/Server/mockSupabase";
import { useRole } from "@/components/webapp/contexts/RoleContext";
import { useData } from "@/components/webapp/contexts/DataContext";
import BoothStatusSelector from "./components/BoothStatusSelector";
import BoothHandoverQR from "./components/BoothHandoverQR";

export default function BoothManager() {
    const { message } = App.useApp();
    const { assignedStall } = useRole();
    const {
        api: { fetchedData, fetchData },
    } = useData();
    const [crowd, setCrowd] = useState<StatusLevel>(0);
    const [stock, setStock] = useState<StatusLevel>(0);
    const [isDirty, setIsDirtyInternal] = useState(false);
    const isDirtyRef = React.useRef(false);
    const [loading, setLoading] = useState(false);
    const lastStallRef = React.useRef<string | null>(null);

    const checkDirty = (currentCrowd: StatusLevel, currentStock: StatusLevel) => {
        if (fetchedData?.stalls && assignedStall) {
            const myStall = fetchedData.stalls.find((s) => s.stallName === assignedStall);
            if (myStall) {
                const dirty = currentCrowd !== myStall.crowdLevel || currentStock !== myStall.stockLevel;
                setIsDirtyInternal(dirty);
                isDirtyRef.current = dirty;
                return dirty;
            }
        }
        return false;
    };

    useEffect(() => {
        if (fetchedData?.stalls && assignedStall) {
            const myStall = fetchedData.stalls.find((s) => s.stallName === assignedStall);
            if (myStall) {
                if (assignedStall !== lastStallRef.current) {
                    setCrowd(myStall.crowdLevel);
                    setStock(myStall.stockLevel);
                    setIsDirtyInternal(false);
                    isDirtyRef.current = false;
                    lastStallRef.current = assignedStall;
                    return;
                }

                if (!isDirtyRef.current) {
                    setCrowd(myStall.crowdLevel);
                    setStock(myStall.stockLevel);
                } else {
                    if (crowd === myStall.crowdLevel && stock === myStall.stockLevel) {
                        setIsDirtyInternal(false);
                        isDirtyRef.current = false;
                    }
                }
            }
        }
    }, [fetchedData, assignedStall, crowd, stock]);

    const handleUpdate = async () => {
        if (!assignedStall) return;
        setLoading(true);
        try {
            await mockSupabaseStalls.update(assignedStall, { crowdLevel: crowd, stockLevel: stock });
            message.success("ステータスを更新しました");
            setIsDirtyInternal(false);
            isDirtyRef.current = false;
            await fetchData();
        } catch (e) {
            message.error("更新に失敗しました");
        } finally {
            setLoading(false);
        }
    };

    return (
        <CardBase title="Booth Manager">
            <CardInside>
                <div style={{ display: "flex", flexDirection: "column", gap: "25px", padding: "10px 0" }}>
                    <span style={{ fontSize: "1.4em", fontWeight: "bold" }}>
                        模擬店名 : {assignedStall || "Loading..."}
                    </span>

                    <BoothStatusSelector
                        label="混雑状況"
                        value={crowd}
                        onChange={(val) => {
                            setCrowd(val);
                            checkDirty(val, stock);
                        }}
                        options={["空き", "やや混雑", "混雑"]}
                    />

                    <BoothStatusSelector
                        label="在庫状況"
                        value={stock}
                        onChange={(val) => {
                            setStock(val);
                            checkDirty(crowd, val);
                        }}
                        options={["在庫あり", "少なめ", "売り切れ"]}
                    />

                    <Button
                        type="primary"
                        block
                        size="large"
                        onClick={handleUpdate}
                        loading={loading}
                        style={{ fontWeight: "bold" }}
                    >
                        情報を更新する
                    </Button>
                    {isDirty && (
                        <span
                            style={{
                                color: "#ff4d4f",
                                fontSize: "1.1em",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            情報は反映されていません！
                        </span>
                    )}
                    <Divider />
                    <BoothHandoverQR assignedStall={assignedStall} />
                </div>
            </CardInside>
        </CardBase>
    );
}
