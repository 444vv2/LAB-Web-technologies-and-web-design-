set -e

ARDU_WS="$HOME/ardu_ws"
QGC="$HOME/qgc/squashfs-root/AppRun"


source /opt/ros/humble/setup.bash
source "$ARDU_WS/install/setup.bash"



export GZ_SIM_RESOURCE_PATH="$GZ_SIM_RESOURCE_PATH:$ARDU_WS/install/ardupilot_gazebo/share"
export SDF_PATH="$GZ_SIM_RESOURCE_PATH"


"$QGC" >/dev/null 2>&1 & QGC_PID=$!


trap 'kill $QGC_PID 2>/dev/null || true' EXIT


ros2 launch ardupilot_gz_bringup iris_maze.launch.py
