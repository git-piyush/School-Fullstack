package com.example.School.dto;

public class LeaveChartDTO {

    private Long approvedLeaves;

    private Long disApprovedLeaves;

    private Long pendingLeaves;

    public Long getApprovedLeaves() {
        return approvedLeaves;
    }

    public void setApprovedLeaves(Long approvedLeaves) {
        this.approvedLeaves = approvedLeaves;
    }

    public Long getDisApprovedLeaves() {
        return disApprovedLeaves;
    }

    public void setDisApprovedLeaves(Long disApprovedLeaves) {
        this.disApprovedLeaves = disApprovedLeaves;
    }

    public Long getPendingLeaves() {
        return pendingLeaves;
    }

    public void setPendingLeaves(Long pendingLeaves) {
        this.pendingLeaves = pendingLeaves;
    }
}
